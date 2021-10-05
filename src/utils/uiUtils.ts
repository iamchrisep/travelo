export const blockBody = () => {
    const { scrollY } = window;
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = `-${scrollY || '0'}px`;
};

export const unblockBody = () => {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.top = '';
    window.scrollTo(0, 0);
    window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
};
