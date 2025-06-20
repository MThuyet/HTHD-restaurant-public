<?php

namespace App\Enums\Order;

enum OrderDetailStatus: string
{
    case HOLD = 'HOLD';
    case WAITING = 'WAITING';
    case PREPARING = 'PREPARING';
    case READY = 'READY';
    case SERVED = 'SERVED';
    case CANCELLED = 'CANCELLED';
}