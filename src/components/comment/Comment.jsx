import React, {useState} from 'react';

import './comment.scss'



import menavatar from "../../assets/images/men-avatar.png"
import sendicon from "../../assets/images/send-icon.png"








function Comment(props) {
    

    const text = 'Напишите комментарий...'
    const name = 'Sanzhar Zhanibekov'
    const comment = 'Сколько текста понадобится для реализации этого проекта??'
    const data = '22 ноя в 19:19'
    const resp = 'Ответить'

    return (
        <>
            <div className='main-comment'>
                <div className='comment-section'>
                    <div className='avatar'>
                        <img src={menavatar} alt="" />
                    </div>
                    <div className='comment-content'>
                        <p>{name}</p>
                        <p>{comment}</p>
                        <div className='data-resp'>
                            <p>{data}</p>
                            <a href="">{resp}</a>
                        </div>
                    </div>
                </div>

                <div className='text-comment'>
                    <div className='avatar'>
                        <img src={menavatar} alt="" />
                    </div>
                    <div className='input-comment'>
                        <input type="text" placeholder={text} />

                    </div>
                    <div className='input-send'>
                        <button>
                            <img src={sendicon} alt="" />
                        </button>
                    </div>
                </div>
            </div>


            
        </>
    );
}

export default Comment;