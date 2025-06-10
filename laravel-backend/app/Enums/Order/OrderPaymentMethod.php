<?php

namespace App\Enums\Order;


enum OrderPaymentMethod: string
{
    case Cash = 'CASH';
    case Card = 'CARD';
    case Transfer = 'TRANSFER';
}