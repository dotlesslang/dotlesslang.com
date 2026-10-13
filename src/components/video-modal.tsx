"use client";

import { useRef } from "react";
import { Icon } from "./icon";

export function VideoModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  function close() { dialogRef.current?.close(); videoRef.current?.pause(); triggerRef.current?.focus(); }
  return <>
    <button ref={triggerRef} className="button button-quiet" onClick={() => dialogRef.current?.showModal()}><span className="play-circle"><Icon name="play" size={13} /></span>Watch the app</button>
    <dialog ref={dialogRef} className="video-dialog" aria-labelledby="video-title" onCancel={close} onClick={(event) => { if (event.target === dialogRef.current) close(); }} onClose={() => videoRef.current?.pause()}>
      <div className="video-dialog-head"><div><span className="eyebrow">DOTLESS ON ANDROID</span><h2 id="video-title">See it in motion.</h2></div><button className="icon-button" onClick={close} aria-label="Close video"><Icon name="close" /></button></div>
      <video ref={videoRef} controls playsInline preload="none" aria-label="Original Dotless Android keyboard demonstration"><source src="/working_demo3.mp4" type="video/mp4" /><p>Your browser does not support this video. <a href="/working_demo3.mp4">Download the demo.</a></p></video>
      <p className="video-note">A look at the original Android alpha.</p>
    </dialog>
  </>;
}
