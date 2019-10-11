import React from 'react';
import Header from './Header';

const AboutPage = () => (
    <div>
        <Header />
        <p className="about__text">
            このアプリはコードと歌詞をメモします。
            コードと歌詞が決まったら、早速書き出してみよう！
        </p>
    </div>
);

export default AboutPage;
