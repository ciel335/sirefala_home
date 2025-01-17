import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import NewsData from "../constants/NewsData";
import MemberList from "../components/MemberList";

interface Props {
  children?: ReactNode;
  animation: string;
  startClass?: string;
  endClass?: string;
  rootMargin?: string;
  triggerOnce?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const AnimationTrigger = ({
  children,
  rootMargin = "100px",
  animation,
  startClass = "",
  endClass = "",
  triggerOnce = false,
  className,
  style,
}: Props) => {
  const { ref, inView } = useInView({
    rootMargin: rootMargin,
    triggerOnce: triggerOnce,
  });
  return (
    <div ref={ref} className={className} style={style}>
      <div className={inView ? animation : startClass}>{children}</div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Title-anim">しれふぁら！！</h1>
      </header>

      <AnimationTrigger animation="fadeIn" rootMargin="50px">
        <div className="ContentItem">
          <h2>わっつにゅー</h2>
          {(() => {
            return NewsData["whats-new"].map((whatsNew) => (
              <div key={whatsNew.date}>
                {whatsNew.date} {whatsNew.message}
                <br />
              </div>
            ));
          })()}
        </div>
      </AnimationTrigger>

      <AnimationTrigger animation="fadeIn" rootMargin="50px">
        <div className="ContentItem">
          <h2>アルバム</h2>
          まだ出てないよ！
        </div>
      </AnimationTrigger>

      <AnimationTrigger animation="fadeIn" rootMargin="50px">
        <div className="ContentItem">
          <h2>メンバー</h2>
          <MemberList />
        </div>
      </AnimationTrigger>

      <footer className="App-footer" />
    </div>
  );
}

export default App;
