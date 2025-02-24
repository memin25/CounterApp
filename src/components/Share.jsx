import React, { useState } from 'react';
import './Share.css';

const Share = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

const shareOptions = [
    {
      name: 'WhatsApp',
      icon: '📱',
      action: () => {
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(content)}`;
        window.open(whatsappUrl, '_blank');
      }
    },
    {
      name: 'PDF İndir',
      icon: '📄',
      action: () => {
        const element = document.createElement('a');
        const file = new Blob([content], {type: 'application/pdf'});
        element.href = URL.createObjectURL(file);
        element.download = 'sayac_degeri.pdf';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
      }
    },
    {
      name: 'Kopyala',
      icon: '📋',
      action: () => {
        navigator.clipboard.writeText(content);
        const notification = document.createElement('div');
        notification.className = 'copy-notification';
        notification.textContent = 'İçerik kopyalandı!';
        document.body.appendChild(notification);
        setTimeout(() => {
          notification.remove();
        }, 2000);
      }
    },
    {
      name: 'Twitter',
      icon: '🐦',
      action: () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(content)}`;
        window.open(twitterUrl, '_blank');
      }
    },
    {
      name: 'E-posta',
      icon: '📧',
      action: () => {
        window.location.href = `mailto:?subject=Sayaç Değeri&body=${encodeURIComponent(content)}`;
      }
    }
  ];

  return (
    <div className="share-container">
      <button onClick={toggleMenu} className="share-button">
        Paylaş 📤
      </button>
      
      {isOpen && (
        <div className="share-menu">
          {shareOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                option.action();
                setIsOpen(false);
              }}
              className="share-option"
            >
              {option.icon} {option.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Share;
