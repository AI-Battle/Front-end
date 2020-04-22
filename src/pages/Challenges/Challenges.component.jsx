import React, { useState } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import './Challenges.styles.css'

import setting from '../../images/gear.png'


const Challenges = ({Challenges, history, match}) => {

    const [display, setDisplay] = useState('1')

    const handleTab = (e) => {
        console.log('run')
        const first = document.querySelector(".dashboard-team__tabs__single--active")

        const target = e.currentTarget
        const id = target.id;
        if (target.classList.contains('dashboard-team__tabs__single--active')) {
            return
        } else {
            first.classList.remove('dashboard-team__tabs__single--active')
            target.classList.add('dashboard-team__tabs__single--active')
            setDisplay(id)
        }

    }

    const renderContent = () => {
        switch(display) {
            case '1':
                return (
                    <div>
                        <div className='dashboard-team__body__alert'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                            <span> چالش مورد نظر را انتخاب کنید</span>
                        </div>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            alignItems: 'flex-start'
                        }}>
                            {Challenges.map(challenge => (
                                <div key={challenge.id} className='single-challenge' onClick={() => history.push(`${match.url}${challenge.linkUrl}`)}>
                                    {challenge.name}
                                </div>
                            ))}
                        </div>
                    </div>
                )
            case '2':
                return (
                    <div className='dashboard-team__body__invitation'>
                        <div className='dashboard-team__body__invitation__nothing text-center'>
                            تنظیمات
                        </div>
                    </div>
                )
            case '3':
                return (
                    <div>
                        <div className='dashboard-team__body__alert'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                            <span>    ابتدا یک تیم بسازید سپس هم‌تیمی‌هایتان را دعوت کنید.</span>
                        </div>

                        <div className='dashboard-team__body__input'>
                            <label htmlFor="input_1">نام تیم</label>
                            <input id="input_1" type="text" required />
                        </div>

                        <div className='d-flex align-items-center'>
                            <svg style={{ marginLeft: '15px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                            <div className='dashboard-team__body__input dashboard-team__body__input--file w-100'>
                                <label htmlFor="input_2">آواتار</label>
                                <input id="input_2" type="file" accept="image/png, image/jpeg" dir='ltr' />
                            </div>
                        </div>
                        <span className='dashboard-team__body__caption'>عکس مربع با حجم حداکثر ۲۰۰ کیلوبایت</span>
                        <div>
                            <button id='btn-1' className='btn'>
                                <svg style={{ marginLeft: '10px' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                بساز
                            </button>
                        </div>
                    </div>
                )
            default:
                return null
        } 
    }

    return (
        <div className='challenges'>
            <h3 className='username'>نام کاربری</h3>
            <div className='container'>
                <h1 className='neon-orange'>Challenges</h1>
            </div>
            <div className='dashboard-team' style={{height: '30rem'}}>
                {console.log('rendering')}
                <div className='dashboard-team__tabs'>
                    <div id="1" className='dashboard-team__tabs__single dashboard-team__tabs__single--active py-2' onClick={handleTab} style={{height: '100%'}}>

                        <div className='dashboard-team__tabs__single__icon'>
                            <svg id="Layer_1" enable-background="new 0 0 512.002 512.002" height="40" viewBox="0 0 512.002 512.002" width='40' xmlns="http://www.w3.org/2000/svg"><g id="XMLID_1642_"><g id="XMLID_2675_"><path id="XMLID_2692_" d="m34.432 331.15c-16.032-32.253-24.43-70.631-24.43-104.771 0-99.467 82.801-175.929 181.991-175.929 96.814 0 176.119 81.133 176.119 179.044l33.818 110.107h-53.591v51.341c0 28.894-23.423 52.317-52.317 52.317h-61.287l-10.254 58.741h-191.976l14.743-61.141c8.905-36.931 4.094-75.691-12.816-109.709z" fill="#ffcbbe"/><g id="XMLID_2688_"><path id="XMLID_2689_" d="m86.634 245.528c2.674 12.03 7.409 23.283 13.822 33.367l-14.092 14.092 32.355 32.355 14.089-14.089c10.084 6.416 21.338 11.154 33.37 13.83v19.917h45.757v-19.916c12.032-2.676 23.286-7.414 33.37-13.83l14.089 14.089 32.355-32.355-14.092-14.092c6.413-10.084 11.148-21.336 13.822-33.367h19.928v-45.757h-19.934c-2.677-12.026-7.414-23.275-13.827-33.355l14.103-14.104-32.355-32.355-14.107 14.107c-10.079-6.41-21.327-11.145-33.352-13.819v-19.946h-45.757v19.946c-12.025 2.674-23.272 7.409-33.352 13.819l-14.107-14.107-32.355 32.355 14.104 14.104c-6.414 10.08-11.151 21.329-13.827 33.355h-19.935v45.757h19.928zm53.401-22.863c0-27.074 21.948-49.021 49.021-49.021s49.021 21.948 49.021 49.021-21.948 49.021-49.021 49.021-49.021-21.948-49.021-49.021z" fill="#91def5"/></g></g><circle id="XMLID_2729_" cx="466.001" cy="46" fill="#f6838d" r="36"/><circle id="XMLID_2735_" cx="466.001" cy="256" fill="#d8ec84" r="36"/><circle id="XMLID_1663_" cx="466.001" cy="466" fill="#ffcb7c" r="36"/><g id="XMLID_1350_"><path id="XMLID_1384_" d="m189.056 163.644c-32.544 0-59.021 26.477-59.021 59.021s26.477 59.021 59.021 59.021c32.545 0 59.021-26.477 59.021-59.021s-26.476-59.021-59.021-59.021zm0 98.042c-21.516 0-39.021-17.505-39.021-39.021s17.505-39.021 39.021-39.021c21.517 0 39.021 17.505 39.021 39.021s-17.504 39.021-39.021 39.021z"/><path id="XMLID_1543_" d="m221.935 345v-12.188c7.552-2.248 14.831-5.265 21.766-9.021l8.622 8.622c3.906 3.905 10.236 3.905 14.143 0l32.354-32.355c3.905-3.905 3.905-10.236 0-14.142l-8.627-8.627c3.755-6.934 6.77-14.21 9.016-21.761h12.198c5.522 0 10-4.477 10-10v-45.757c0-5.523-4.478-10-10-10h-12.207c-2.247-7.547-5.263-14.821-9.017-21.75l8.637-8.637c3.905-3.905 3.905-10.237 0-14.142l-32.354-32.355c-3.905-3.905-10.235-3.905-14.143 0l-8.642 8.642c-6.929-3.751-14.201-6.765-21.746-9.011v-12.217c0-5.523-4.478-10-10-10h-45.757c-5.522 0-10 4.477-10 10v12.217c-7.545 2.246-14.817 5.26-21.746 9.011l-8.642-8.642c-3.906-3.905-10.236-3.905-14.143 0l-32.355 32.355c-1.875 1.875-2.929 4.419-2.929 7.071s1.054 5.196 2.929 7.071l8.638 8.637c-3.755 6.931-6.77 14.204-9.018 21.75h-12.206c-5.522 0-10 4.477-10 10v45.757c0 5.523 4.478 10 10 10h12.198c2.246 7.55 5.261 14.827 9.015 21.761l-8.627 8.626c-1.875 1.875-2.929 4.419-2.929 7.071s1.054 5.196 2.929 7.071l32.355 32.355c3.906 3.905 10.236 3.905 14.143 0l8.622-8.622c6.935 3.757 14.214 6.773 21.766 9.021v12.189c0 5.523 4.478 10 10 10h45.757c5.522 0 10-4.477 10-10zm-12.171-29.678c-4.574 1.017-7.829 5.075-7.829 9.761v9.917h-25.757v-9.917c0-4.687-3.255-8.744-7.829-9.762-10.729-2.386-20.881-6.593-30.173-12.505-3.953-2.516-9.125-1.948-12.439 1.366l-7.018 7.018-18.213-18.213 7.021-7.021c3.313-3.313 3.882-8.484 1.367-12.438-5.909-9.291-10.114-19.441-12.499-30.169-1.017-4.575-5.075-7.83-9.762-7.83h-9.928v-25.757h9.934c4.686 0 8.743-3.253 9.761-7.827 2.388-10.724 6.594-20.871 12.504-30.16 2.516-3.954 1.947-9.125-1.366-12.439l-7.032-7.032 18.213-18.213 7.036 7.036c3.314 3.314 8.484 3.88 12.438 1.367 9.285-5.906 19.432-10.11 30.155-12.495 4.574-1.018 7.829-5.075 7.829-9.762v-9.946h25.757v9.946c0 4.687 3.255 8.744 7.829 9.762 10.724 2.385 20.87 6.589 30.155 12.495 3.955 2.514 9.124 1.947 12.438-1.367l7.036-7.036 18.213 18.213-7.033 7.032c-3.313 3.314-3.882 8.485-1.365 12.44 5.908 9.286 10.115 19.433 12.503 30.159 1.018 4.574 5.075 7.827 9.761 7.827h9.935v25.757h-9.928c-4.687 0-8.745 3.255-9.762 7.83-2.385 10.729-6.59 20.879-12.499 30.169-2.515 3.954-1.946 9.124 1.367 12.438l7.021 7.021-18.211 18.213-7.018-7.018c-3.315-3.315-8.487-3.882-12.439-1.366-9.291 5.912-19.444 10.12-30.173 12.506z"/><path id="XMLID_1544_" d="m20.001 226.379c0-29.126 7.728-57.618 22.346-82.395 2.807-4.757 1.226-10.888-3.53-13.694-4.76-2.806-10.889-1.225-13.694 3.531-16.435 27.854-25.121 59.86-25.121 92.558 0 36.842 9.286 76.652 25.476 109.222 16.009 32.203 20.288 68.751 12.05 102.913l-14.743 61.142c-1.294 5.369 2.009 10.771 7.378 12.065.787.19 1.576.281 2.352.281 4.514 0 8.609-3.077 9.714-7.658l14.743-61.142c9.338-38.724 4.514-80.099-13.583-116.504-14.864-29.897-23.388-66.462-23.388-100.319z"/><path id="XMLID_1605_" d="m466.001 302c25.364 0 46-20.636 46-46s-20.636-46-46-46c-21.93 0-40.313 15.43-44.892 36h-37.467l-5.537-18.026c-.371-47.274-18.068-92.023-50.045-126.891l45.084-45.083h47.965c4.58 20.57 22.962 36 44.892 36 25.364 0 46-20.636 46-46s-20.636-46-46-46c-21.93 0-40.313 15.43-44.892 36h-52.108c-2.652 0-5.195 1.054-7.071 2.929l-48.121 48.121c-33.967-30.142-76.739-46.6-121.817-46.6-35.342 0-69.901 9.319-99.942 26.949-4.763 2.795-6.358 8.923-3.563 13.686 2.794 4.763 8.922 6.36 13.686 3.563 26.975-15.831 58.033-24.198 89.819-24.198 91.599 0 166.119 75.833 166.119 169.044 0 .995.148 1.985.44 2.936l29.845 97.171h-40.059c-2.652 0-5.195 1.054-7.071 2.929-1.875 1.875-2.929 4.419-2.929 7.071v51.341c0 23.333-18.983 42.317-42.316 42.317h-61.287c-4.859 0-9.016 3.493-9.851 8.28l-10.253 58.741c-.95 5.44 2.69 10.621 8.131 11.571.582.102 1.16.15 1.731.15 4.769 0 8.991-3.423 9.839-8.282l8.809-50.461h52.882c13.045 0 25.161-4.036 35.18-10.915l30.728 30.728c1.876 1.875 4.419 2.929 7.071 2.929h52.108c4.58 20.57 22.962 36 44.892 36 25.364 0 46-20.636 46-46s-20.636-46-46-46c-21.93 0-40.313 15.43-44.892 36h-47.965l-27.464-27.464c7.937-10.458 12.658-23.483 12.658-37.594v-41.341h43.591c3.173 0 6.157-1.505 8.042-4.057 1.886-2.552 2.448-5.847 1.518-8.879l-21.704-70.665h31.324c4.58 20.57 22.963 36 44.892 36zm0-282c14.337 0 26 11.664 26 26s-11.663 26-26 26-26-11.664-26-26 11.663-26 26-26zm0 420c14.337 0 26 11.664 26 26s-11.663 26-26 26-26-11.664-26-26 11.663-26 26-26zm0-210c14.337 0 26 11.664 26 26s-11.663 26-26 26-26-11.664-26-26 11.663-26 26-26z"/><path id="XMLID_1615_" d="m61.421 113.43c2.64 0 5.21-1.07 7.07-2.93 1.859-1.86 2.93-4.44 2.93-7.07 0-2.64-1.07-5.21-2.93-7.07s-4.431-2.93-7.07-2.93c-2.63 0-5.21 1.07-7.07 2.93-1.859 1.86-2.93 4.44-2.93 7.07s1.07 5.21 2.93 7.07 4.44 2.93 7.07 2.93z"/></g></g></svg>                        </div>

                        <div className='dashboard-team__tabs__single__title'>
                            چالش ها
                        </div>

                    </div>
                    <div id="2" className='dashboard-team__tabs__single' onClick={handleTab} style={{height: '100%'}}>

                        <div className='dashboard-team__tabs__single__icon'> 
                            <img src={setting} width='50' height='50' alt='setting' />
                        </div>

                        <div className='dashboard-team__tabs__single__title'>
                            تنظیمات
                        </div>

                    </div>
                    <div id="3" className='dashboard-team__tabs__single' onClick={handleTab} style={{height: '100%'}}>

                        <div className='dashboard-team__tabs__single__icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000"><path d="M22.7 11.92a5.7 5.7 0 0 1-.66 7.94c-.7.6-.94 1.1-.5 1.91.08.15.1.34.14.52-.7-.31-1.35-.78-2.04-.85-.69-.07-1.41.32-2.13.4a7.1 7.1 0 0 1-5.76-1.89c-3.07-2.84-2.63-7.2.92-9.52 3.16-2.07 7.8-1.38 10.02 1.49zm-7.41-7.03a6.65 6.65 0 0 1 1.38 3.52c-2.22.11-4.16.79-5.73 2.31a6.81 6.81 0 0 0-2.12 5.78c-.87-.11-1.66-.23-2.46-.3-.28-.02-.6.01-.84.14-.77.44-1.51.93-2.4 1.48.17-.73.27-1.37.46-1.98.13-.45.07-.7-.35-1C.56 12.95-.57 10.13.28 7.22c.78-2.7 2.7-4.33 5.3-5.18a8.89 8.89 0 0 1 9.7 2.85zm-1.63 7.97c-.47 0-.86.4-.84.86a.84.84 0 0 0 1.67 0 .84.84 0 0 0-.83-.86zm5.17 0c-.44 0-.81.35-.83.8-.02.47.35.85.82.85a.8.8 0 0 0 .82-.78.82.82 0 0 0-.81-.87zm-7.06-6.39c-.55.01-1.01.48-1 1.01a1 1 0 0 0 1.03.98c.56 0 1-.44.99-1a1 1 0 0 0-1.02-.99zm-6.34 0a1 1 0 0 0-1.04.97c-.01.56.42 1 .98 1.02.56.01 1.03-.42 1.05-.96a1.03 1.03 0 0 0-.99-1.03z" /></svg>
                        </div>

                        <div className='dashboard-team__tabs__single__title'>
                            تشکیل تیم
                        </div>

                    </div>

                </div>

                <div className='dashboard-team__body d-flex text-white text-right' style={{height: '100%'}}>
                    {
                        renderContent()
                    }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        Challenges: state.Challenges
    }
}

export default withRouter(connect(mapStateToProps)(Challenges));