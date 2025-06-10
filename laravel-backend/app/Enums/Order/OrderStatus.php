<?php

namespace App\Enums\Order;

enum OrderStatus: string
{
    case Paid = 'PAID';
    case Unpaid = 'UNPAID';
}