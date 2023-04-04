import * as React from 'react';

type Type = 'info' | 'success' | 'warning' | 'error';

export interface NotificationProps {
  type?: Type;
  title?: string;
  message?: string;
}

export const Notification: React.FC<NotificationProps> = ({
  message,
  title = 'Notification Component',
  type = 'warning',
}: NotificationProps) => {
  return (
    <div className={`notification notification--${type}`}>
      <div className="notification__body">
        {title && <div className="notification__title">{title}</div>}
        {message && <div className="notification__message">{message}</div>}
      </div>
    </div>
  );
};

export default Notification;