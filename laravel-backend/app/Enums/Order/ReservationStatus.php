<?php

namespace App\Enums\Order;

enum ReservationStatus: string
{
    case PendingConfirmation = 'PENDING_CONFIRMATION';
    case Confirmed = 'CONFIRMED';
    case Cancelled = 'CANCELLED';
    case Seated = 'SEATED';
    case Completed = 'COMPLETED';
}