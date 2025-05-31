import React, { useRef, useEffect } from 'react'
import { ReactMediaRecorder } from 'react-media-recorder';

const Recorder = () => {
    const videoRef = useRef(null);

    return (
        <div>
            <ReactMediaRecorder
                video
                render={({ status, startRecording, stopRecording, mediaBlobUrl, previewStream }) => {
                    useEffect(() => {
                        const video = videoRef.current;
                        if (!video) return;

                        if (mediaBlobUrl) {
                            video.srcObject = null;
                            video.src = mediaBlobUrl;
                        } else if (previewStream) {
                            video.src = '';
                            video.srcObject = previewStream;
                        }
                    }, [mediaBlobUrl, previewStream]);

                    return (
                        <div className='bg-zinc-800 flex flex-col p-5 gap-10 w-full justify-center items-center h-screen'>
                            <div className='h-auto w-[700px] rounded-xl flex flex-col justify-center items-center bg-zinc-600'>
                                <p className="mb-4">
                                    {status === 'idle' ? "Press Start to Start Recording" : <span className='font-semibold text-white'>video : {status}</span>}
                                </p>
                                <video
                                    ref={videoRef}
                                    autoPlay
                                    muted={status === "recording" || status === "idle"}
                                    controls={!!mediaBlobUrl}
                                    style={{ width: 650, marginTop: 16 }}
                                />
                                <div className='flex gap-20 mt-6'>
                                    <button className='px-5 py-3 text-white rounded-xl mb-5'
                                        style={{ background: status === 'recording' ? 'white' : 'blue', color: status === 'recording' ? 'green' : 'white' }} onClick={startRecording}>Start Recording</button>
                                    <button
                                        className='px-5 py-3 text-white rounded-xl mb-5 bg-red-500'

                                        onClick={stopRecording}
                                    >
                                        Stop Recording
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                }}
            />
        </div>
    )
}

export default Recorder
