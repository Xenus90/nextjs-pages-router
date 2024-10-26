import { createContext, ReactNode, useEffect, useState } from "react";

type Notification = {
  title: string;
  message: string;
  status: 'success' | 'error' | 'pending';
};

const NotificationContext = createContext<{
  notification: Notification | null,
  showNotification: (notificationData: Notification) => void,
  hideNotification: () => void,
}>({
  notification: null,
  showNotification: (notificationData: Notification) => { },
  hideNotification: () => { },
});

export const NotificationContextProvider = (props: { children: ReactNode }) => {
  const [activeNotification, setActiveNotification] = useState<Notification | null>(null);

  const showNotificationHandler = (notificationData: Notification) => {
    setActiveNotification(notificationData);
  };

  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (activeNotification && (activeNotification.status === 'success' || activeNotification.status === 'error')) {
      timer = setTimeout(() => {
        setActiveNotification(null);
      }, 1000 * 3);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [activeNotification]);

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;