
function ExtraStep() {
    return (
        <div>
            <label>
            <input type="checkbox" />
            Privacy Mode ({process.env.NEXT_PUBLIC_Privacy_Mode_Price})
            </label>
        </div>
    );
}


export default ExtraStep;