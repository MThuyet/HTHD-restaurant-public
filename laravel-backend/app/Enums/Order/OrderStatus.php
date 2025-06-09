<?php

namespace App\Order\Enums;

enum OrderStatus: string
{
    case Paid = 'PAID';
    case Unpaid = 'UNPAID';
}