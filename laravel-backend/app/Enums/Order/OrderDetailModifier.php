<?php

namespace App\Order\Enums;

enum OrderDetailModifier: string
{
    case ADD = 'ADD';
    case SUBTRACT = 'SUBTRACT';
}