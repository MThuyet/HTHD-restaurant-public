<?php

namespace App\Branch\Enums;

enum MaintenanceStatus: string
{
    case Pending = 'PENDING';
    case InProgress = 'IN_PROGRESS';
    case Completed = 'COMPLETED';
    case Cancelled = 'CANCELLED';
    case Done = 'DONE';
}