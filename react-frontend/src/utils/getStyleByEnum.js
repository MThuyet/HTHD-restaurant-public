export const getStyleByReservationStatus = (status) => {
    switch (status) {
        case 'PENDING_CONFIRMATION':
            return 'bg-whiteBlue border border-darkBlue';
        case 'CONFIRMED':
            return 'bg-whiteYellow border border-darkYellow';
        case 'COMPLETE':
            return 'bg-whiteGreen border border-darkGreen';
        case 'CANCELLED':
            return 'bg-whiteRed border border-darkRed';
        case 'LATE':
            return 'bg-whitePurple border border-darkPurple';
        default:
            return 'bg-whiteBlue border border-darkBlue';
    }
};
