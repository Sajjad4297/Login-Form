import { useRef, useEffect, useState } from 'react';
export function Canvas({ setRightCode,changed,setChanged }) {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        function getImgValiCode() {
            let showNum = [];
            let canvasWinth = 80;
            let canvasHeight = 40;
            canvas.width = canvasWinth;
            canvas.height = canvasHeight;
            let sCode = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,0,1,2,3,4,5,6,7,8,9';
            let saCode = sCode.split(',');
            let saCodeLen = saCode.length;
            for (let i = 0; i <= 3; i++) {
                let sIndex = Math.floor(Math.random() * saCodeLen);
                let sDeg = (Math.random() * 30 * Math.PI) / 180;
                let cTxt = saCode[sIndex];
                showNum[i] = cTxt.toLowerCase();
                let x = 10 + i * 20;
                let y = 20 + Math.random() * 8;
                context.font = 'bold 23px 微软雅黑';
                context.translate(x, y);
                context.rotate(sDeg);

                context.fillStyle = randomColor();
                context.fillText(cTxt, 0, 0);

                context.rotate(-sDeg);
                context.translate(-x, -y);
            }
            for (let i = 0; i <= 5; i++) {
                context.strokeStyle = randomColor();
                context.beginPath();
                context.moveTo(
                    Math.random() * canvasWinth,
                    Math.random() * canvasHeight
                );
                context.lineTo(
                    Math.random() * canvasWinth,
                    Math.random() * canvasHeight
                );
                context.stroke();
            }
            for (let i = 0; i < 30; i++) {
                context.strokeStyle = randomColor();
                context.beginPath();
                let x = Math.random() * canvasWinth;
                let y = Math.random() * canvasHeight;
                context.moveTo(x, y);
                context.lineTo(x + 1, y + 1);
                context.stroke();
            }
            setRightCode(showNum.join(''));

        }
        function randomColor() {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            return 'rgb(' + r + ',' + g + ',' + b + ')';
        }
        getImgValiCode()
    }, [changed]);


    return <canvas ref={canvasRef} id='captcha' />;
}
