'use client'

import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { useEffect } from "react";

const messages: string[] = [
  'hello, how to turn on the hot water?',
  'Hi! To turn on the hot water in the shower, simply adjust the hot and cold knobs until you reach your desired temperature. Enjoy your stay!',
  'whats the closest subway?',
  'The closest subway station is Poble Sec. It\'s conveniently located near the rental property. Remember to purchase a ticket to access the transportation system. Let me know if there\'s anything else I can help you with!',
  'how to connect to wifi',
  'To connect to the WiFi, please check the card provided in the apartment for the network name and password.',
  'is the tap water safe to drink?',
  'Yes, tap water in Barcelona is safe to drink. Enjoy your stay!',
]

export default function Chat(props: { classNames: string }) {
  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-container');

    const scrollToBottom = () => {
      if (scrollContainer) {
        const scrollHeight = scrollContainer.scrollHeight;
        const clientHeight = scrollContainer.clientHeight;
        const maxScrollTop = scrollHeight - clientHeight;
        let scrollTop = 0;

        const scroll = () => {
          if (scrollTop < maxScrollTop) {
            scrollTop += 0.35; // You can adjust the scrolling speed by changing this value
            scrollContainer.scrollTop = scrollTop;
            requestAnimationFrame(scroll);
          }
        };

        requestAnimationFrame(scroll);
      }
    };

    scrollToBottom();
  }, []);

  return (
    <ScrollShadow hideScrollBar className={props.classNames + " scroll-container"}>
      <div className="flex flex-col gap-2">
        {messages.map((str, idx) => <Message key={idx} inbound={idx % 2 == 0} text={str} />)}
      </div>
    </ScrollShadow>
  )
}

interface MessageProps {
  inbound: boolean,
  text: string
}

export function Message(props: MessageProps) {
  return (
    <div className={(props.inbound ?
      'flex-row ' :
      'flex-row-reverse ') +
      'flex'}
    >
      <div className={(props.inbound ?
        'bg-gray-100 rounded-bl-none ' :
        'bg-blue-500 text-white rounded-br-none ') +
        'p-3 w-max rounded-2xl'}
      >
        {props.text}
      </div>
    </div>
  )
}