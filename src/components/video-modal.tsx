"use client";

import { useRef } from "react";
import { Icon } from "./icon";

export function VideoModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  function prepareVideo() {
    const video = videoRef.current;
    if (video && video.preload !== "auto") {
      video.preload = "auto";
      video.load();
    }
  }
  function open() { prepareVideo(); dialogRef.current?.showModal(); }
  function close() { dialogRef.current?.close(); videoRef.current?.pause(); triggerRef.current?.focus(); }
  return <>
    <button ref={triggerRef} className="button button-quiet" onMouseEnter={prepareVideo} onFocus={prepareVideo} onPointerDown={prepareVideo} onClick={open}><span className="play-circle"><Icon name="play" size={13} /></span>Watch the app</button>
    <dialog ref={dialogRef} className="video-dialog" aria-labelledby="video-title" onCancel={close} onClick={(event) => { if (event.target === dialogRef.current) close(); }} onClose={() => videoRef.current?.pause()}>
      <div className="video-dialog-head"><div><span className="eyebrow">DOTLESS IN ACTION</span><h2 id="video-title">See it in motion.</h2></div><button className="icon-button" onClick={close} aria-label="Close video"><Icon name="close" /></button></div>
      <video ref={videoRef} controls playsInline preload="metadata" poster="/dotless-demo-poster.jpg" width={720} height={1566} onLoadedMetadata={(event) => { event.currentTarget.defaultPlaybackRate = 1.5; event.currentTarget.playbackRate = 1.5; }} aria-label="Dotless keyboard demonstration"><source src="/dotless-demo-trimmed.mp4" type="video/mp4" /><p>Your browser does not support this video. <a href="/working_demo3.MP4">Download the demo.</a></p></video>
    </dialog>
  </>;
}
