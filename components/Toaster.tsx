import toast, { ToastBar, Toaster } from 'react-hot-toast';

const CustomToaster = () => (
    <Toaster
        containerStyle={{
            top: 20,
            left: 20,
            bottom: 20,
            right: 20,
        }}
        gutter={24}
        toastOptions={{
            className: '',
            style: {
                padding: '16px',
                color: '#713200',
            },
            success: {
                style: {
                    background: 'var(--theme-bg)',
                    color: 'var(--theme)',
                },
                iconTheme: {
                    primary: 'var(--theme)',
                    secondary: 'var(--theme-bg)',
                },
            },
            error: {
                style: {
                    background: 'var(--theme)',
                    color: 'white',
                },
            },
        }}>
        {(t) => (
            <ToastBar
                toast={t}
                style={{
                    ...t.style,
                }}>
                {({ icon, message }) => (
                    <>
                        <div aria-label="Close Notification" style={{ cursor: 'pointer' }} onClick={() => toast.dismiss(t.id)}>
                            {icon}
                        </div>
                        {message}
                    </>
                )}
            </ToastBar>
        )}
    </Toaster>
);

export default CustomToaster;
