import toast, { ToastBar, Toaster } from 'react-hot-toast';

const CustomToaster = () => (
    <Toaster>
        {(t) => (
            <ToastBar toast={t}>
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
