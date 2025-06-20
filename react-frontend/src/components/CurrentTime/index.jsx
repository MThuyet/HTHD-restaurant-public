import { memo, useState, useEffect } from 'react';
import { getCurrentTime } from '~/utils/getCurrentTime';

const CurrentTime = memo(() => {
    const [currentTime, setCurrentTime] = useState(getCurrentTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(getCurrentTime());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return <div className="">{currentTime}</div>;
});

export default CurrentTime;
