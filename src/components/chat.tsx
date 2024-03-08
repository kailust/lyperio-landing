'use client'

import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { useEffect } from "react";

const messages: string[] = [
  'Hello, how can I help you learn today?',
  'Hi there! Are you ready to explore some exciting topics together?',
  'What\'s the nearest museum to visit for learning about history?',
  'The nearest museum is the City History Museum. It\'s a fun place to explore and learn!',
  'How do I solve this math problem: 3x + 5 = 20?',
  'Let\'s work on it together! First, subtract 5 from both sides to get 3x = 15. Then, divide both sides by 3 to find the value of x. Can you try it?',
  'What\'s the capital of France?',
  'The capital of France is Paris. It\'s a beautiful city with lots of history and culture to explore!',
];


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
