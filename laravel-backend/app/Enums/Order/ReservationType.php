<?php

namespace App\Order\Enums;

enum ReservationType: string
{
    case WALK_IN = 'WALK_IN';
    case BOOKING = 'BOOKING';
}