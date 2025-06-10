<?php

namespace App\Order\Enums;

enum OrderPaymentMethod: string
{
    case Cash = 'CASH';
    case Card = 'CARD';
    case Transfer = 'TRANSFER';
}