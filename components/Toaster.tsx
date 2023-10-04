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
            className: 'md:min-w-max',
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
                    alignItems: 'baseline',
                }}>
                {({ icon, message }) => (
                    <>
                        <div className="" aria-label="Close Notification" style={{ cursor: 'pointer', top: '0px' }} onClick={() => toast.dismiss(t.id)}>
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
