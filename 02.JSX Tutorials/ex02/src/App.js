import React from 'react';

function App() {
    /* 오류
    return (
            <h1>Ex02</h1>
            <p>특징2: Sigle Root</p>
    );
    이유 : transpile 에러 

    return (
        React.createElement('h1',null,'Ex02') 태그, 속성, 텍스트 값
        React.createElement('p',null,'특징2: Sigle Root') 태그, 속성, 텍스트 값 
    );
     */

    return (
        <div>
            <h1>Ex02</h1>
            <p>특징2: Sigle Root</p>
        </div>
    );
}

export {App};