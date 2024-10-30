"use client";

import React, { useRef } from "react";
import gsap, { random } from "gsap";
import { useGSAP } from "@gsap/react";
import { ReadmePanel } from "../ReadmePanel/Component";
import { GSDevTools } from "../../../lib/gsap/GSDevTools";
import clsx from "clsx";
import styles from "./styles.module.css";

gsap.registerPlugin(GSDevTools);

export default function TimelineBasicsStart(): JSX.Element {
  const el1 = useRef<HTMLDivElement>(null);
  const el2 = useRef<HTMLDivElement>(null);
  const el3 = useRef<HTMLDivElement>(null);
  const el4 = useRef<HTMLDivElement>(null);
  const el5 = useRef<HTMLDivElement>(null);
  const el6 = useRef<HTMLDivElement>(null);
  const tl3Ref = useRef<GSAPTimeline | null>(null);
  const { contextSafe: contextSafe3 } = useGSAP({ scope: el3 });

  useGSAP(
    () => {
      gsap.to(".box", { rotation: 360, duration: 3, repeat: -1 });
    },
    { scope: el1 }
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(".box", { x: 300, duration: 1 });
      tl.to(".circle", { y: 200, duration: 1 });
    },
    { scope: el2 }
  );

  useGSAP(
    () => {
      if (tl3Ref.current) tl3Ref.current.kill();
      tl3Ref.current = gsap.timeline({ paused: true });
      tl3Ref.current.to(".box", { x: 300, duration: 1 });
      tl3Ref.current.to(".box", { rotation: 360, duration: 1 });
    },
    { scope: el3 }
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(".box", { x: 300, duration: 1 }, "start");
      tl.to(".circle", { x: 300, duration: 1 }, "start+=0.5");

      tl.to(".box", { rotation: 360, duration: 1 }, "spin");
      tl.to(".circle", { rotation: -360, duration: 1 }, "spin");
      tl.call(() => {
        console.log("Animation complete!");
      });
    },
    { scope: el4 }
  );

  useGSAP(
    () => {
      gsap.from('.box', {
        opacity: 0,
        y: -50,
        duration: 0.5,
        stagger: 0.2,
        repeat: -1,
        yoyo: true
      });
    },
    { scope: el5 }
  );

  useGSAP(
    () => {
      const moveTl = gsap.timeline();
      moveTl.to('.box', { x: 200, duration: 1 });
      moveTl.to('.circle', { x: 200, duration: 1 }, '-=0.5');

      const rotateTl = gsap.timeline();
      rotateTl.to('.box', { rotation: 180, duration: 1 });
      rotateTl.to('.circle', { rotation: -180, duration: 1 }, '-=0.5');

      const masterTl = gsap.timeline({ repeat: -1, yoyo: true });
      masterTl.add(moveTl);
      masterTl.add(rotateTl);
    },
    { scope: el6 }
  );

  const handlePlay = contextSafe3(() => {
    if (tl3Ref.current) tl3Ref.current.play();
  });

  const handlePause = contextSafe3(() => {
    if (tl3Ref.current) tl3Ref.current.pause();
  });

  const handleReverse = contextSafe3(() => {
    if (tl3Ref.current) tl3Ref.current.reverse();
  });

  const handeRewind = contextSafe3(() => {
    if (tl3Ref.current) tl3Ref.current.seek(0).play();
  });

  return (
    <section>
      <article>
        <h2>A single animation</h2>
        <p>
          a simple single animation that rotates a box 360 degrees and repeats
          forever.
        </p>
        <section>
          <div
            className="flex items-center justify-center min-h-[50vh] border border-purple-300"
            ref={el1}
          >
            <div className="box w-2 h-2 bg-yellow-100"></div>
          </div>
        </section>
        <ReadmePanel
          title="Simple rotation"
          description={`
            <pre><code>
            useGSAP(() => {
                gsap.to('.box', {rotation: 360, duration: 3, repeat: -1 });
              }, [el1])
        </code></pre>`}
        />
      </article>
      <br />
      <article>
        <h2>My first timeline</h2>
        <p>
          Timeline is a powerful tool that allows you to create complex
          animations with precise control over timing and sequencing.
        </p>
        <section>
          <div
            className="flex items-center justify-center min-h-[50vh] border border-purple-300"
            ref={el2}
          >
            <div className="box w-2 h-2 bg-yellow-100 absolute"></div>
            <div className="circle w-2 h-2 bg-yellow-100 rounded-full absolute"></div>
          </div>
        </section>
        <ReadmePanel
          title="Simple rotation"
          description={`
            <pre><code>
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to('.box', { x: 300, duration: 1 });
    tl.to('.circle', { y: 200, duration: 1 });
  }, {scope: el2});
  </pre></code>`}
        />
      </article>
      <br />
      <article>
        <h2>Example 3: Controlling Timeline Playback</h2>
        <p></p>
        <section>
          <div
            className="flex items-center justify-center min-h-[50vh] border border-purple-300"
            ref={el3}
          >
            <div className="box w-2 h-2 bg-purple-400"></div>
            <div className="space-x-2 mt-20">
              <button
                onClick={handlePlay}
                className="px-4 py-2 bg-ocean-100 text-white rounded"
              >
                Play
              </button>
              <button
                onClick={handlePause}
                className="px-4 py-2 bg-yellow-100 text-white rounded"
              >
                Pause
              </button>
              <button
                onClick={handleReverse}
                className="px-4 py-2 bg-ocean-300 text-white rounded"
              >
                Reverse
              </button>
              <button
                onClick={handeRewind}
                className="px-4 py-2 bg-ocean-300 text-white rounded"
              >
                Rewind and Play
              </button>
            </div>
          </div>
        </section>
        <ReadmePanel
          title="Simple rotation"
          description={`
            <pre><code>
            useGSAP(() => {
              if (tl3Ref.current) tl3Ref.current.kill();
              tl3Ref.current = gsap.timeline({ paused: true });
              tl3Ref.current.to('.box', { x: 300, duration: 1 });
              tl3Ref.current.to('.box', { rotation: 360, duration: 1 });
              },
              { scope: el3 }
              );
              </pre></code>`}
        />
      </article>
      <br />
      <article>
        <h2> Advanced Timeline Features, labels and overlapping animations inside a timeline</h2>
        <section>
          <div
            className="flex items-center justify-center min-h-[50vh] border border-purple-300 relative"
            ref={el4}
          >
            <div className="box w-2 h-2 bg-sunset-100 absolute top-[24px] left-[24px]"></div>
            <div className="circle w-2 h-4 bg-sunset-200 rounded-full absolute top-[64px] left-[24px]"></div>
          </div>
        </section>
        <ReadmePanel
          title="labels, overlapping animations"
          description={`
            <pre><code>
              useGSAP(
                () => {
                  const tl = gsap.timeline({ repeat: -1, yoyo: true });
                  tl.to(".box", { x: 300, duration: 1 }, "start");
                  tl.to(".circle", { x: 300, duration: 1 }, "start+=0.5");

                  tl.to(".box", { rotation: 360, duration: 1 }, "spin");
                  tl.to(".circle", { rotation: -360, duration: 1 }, "spin");
                  tl.call(() => {
                    console.log("Animation complete!");
                  });
                },
                { scope: el4 }
              );
              </pre></code>`}
        />
      </article>
      <br />
      <article>
        <h2>Staggered Animations</h2>
        <p>Do a same animation for all selected elements but with a time offset</p>
        <section>
          <div
            className="flex items-center justify-center min-h-[50vh] border border-purple-300 relative"
            ref={el5}
          >
            {[...Array(20)].map((_, i) => (
            <div className="box w-3 h-3 bg-sunset-100"></div>
            ))}
          </div>
        </section>
        <ReadmePanel
          title="Staggering"
          description={`
            <pre><code>
              useGSAP(
                () => {
                  gsap.from('.box', {
                    opacity: 0,
                    y: -50,
                    duration: 0.5,
                    stagger: 0.2,
                    repeat: -1,
                    yoyo: true
                  });
                },
                { scope: el5 }
              );
            </pre></code>`}
        />
      </article>
      <br />
      <article>
        <section>
          <h2 className="mb-2">Nested Timelines</h2>
          <p>controlling multiple timelines with a other timeline</p>
          <div
            className="flex items-center justify-center min-h-[50vh] border border-purple-300 relative"
            ref={el6}
          >
            <div className="box w-2 h-2 bg-sunset-100 absolute top-[24px] left-[24px]"></div>
            <div className="circle w-2 h-4 bg-sunset-200 rounded-full absolute top-[64px] left-[24px]"></div>
          </div>
        </section>
        <ReadmePanel
          title="Nested Timelines"
          description={`
            <pre><code>
              useGSAP(
                () => {
                  const moveTl = gsap.timeline();
                  moveTl.to('.box', { x: 200, duration: 1 });
                  moveTl.to('.circle', { x: 200, duration: 1 }, '-=0.5');

                  const rotateTl = gsap.timeline();
                  rotateTl.to('.box', { rotation: 180, duration: 1 });
                  rotateTl.to('.circle', { rotation: -180, duration: 1 }, '-=0.5');

                  const masterTl = gsap.timeline({ repeat: -1, yoyo: true });
                  masterTl.add(moveTl);
                  masterTl.add(rotateTl);
                },
                { scope: el6 }
              );
              </pre></code>`}
        />
      </article>
      <br />
    </section>
  );
}
