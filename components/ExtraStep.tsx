import { Checkbox } from '@patternfly/react-core';
import { useState } from 'react';

function ExtraStep() {
    const [isPrivacyMode, setIsPrivacyMode] = useState(false);
    return (
        <div>
            <Checkbox
                id="privacy_mode"
                label={`Privacy Mode (${process.env.NEXT_PUBLIC_Privacy_Mode_Price})`}
                isChecked={isPrivacyMode}
                onChange={() => {
                    setIsPrivacyMode(!isPrivacyMode);
                }}
                name="check4"
            />
        </div>
    );
}

export default ExtraStep;
