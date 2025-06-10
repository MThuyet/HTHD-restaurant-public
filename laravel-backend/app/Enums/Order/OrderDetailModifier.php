<?php

namespace App\Enums\Order;

enum OrderDetailModifier: string
{
    case ADD = 'ADD';
    case SUBTRACT = 'SUBTRACT';
}