<?php

namespace App\Enums\Order;

enum ReservationType: string
{
    case WALK_IN = 'WALK_IN';
    case BOOKING = 'BOOKING';
}