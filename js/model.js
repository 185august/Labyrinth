const mazeModel = {
    size: 3,
    cssClasses: [
        'noWall high wide',
        'wall low small',
        ''
    ],
    rows: [
        [
            { isHigh: false, isWide: false, isOpen: false },
            { isHigh: false, isWide: true, isOpen: false },
            { isHigh: false, isWide: false, isOpen: false },
            { isHigh: false, isWide: true, isOpen: false },
            { isHigh: false, isWide: false, isOpen: false },
            { isHigh: false, isWide: true, isOpen: false },
            { isHigh: false, isWide: false, isOpen: false },
        ],
        [
            { isHigh: true, isWide: false, isOpen: false },
            { isHigh: true, isWide: true },
            { isHigh: true, isWide: false, isOpen: false },
            { isHigh: true, isWide: true },
            { isHigh: true, isWide: false, isOpen: false },
            { isHigh: true, isWide: true },
            { isHigh: true, isWide: false, isOpen: false },
        ],
        /*
        [
            { isHigh: true, isWide: false, isOpen: false },
            { isHigh: true, isWide: true },
            { isHigh: true, isWide: false, isOpen: false },
            { isHigh: true, isWide: true },
            { isHigh: true, isWide: false, isOpen: false },
            { isHigh: true, isWide: true },
            { isHigh: true, isWide: false, isOpen: false },
        ],
        [
            { isHigh: false, isWide: false, isOpen: false },
            { isHigh: false, isWide: true, isOpen: false },
            { isHigh: false, isWide: false, isOpen: false },
            { isHigh: false, isWide: true, isOpen: false },
            { isHigh: false, isWide: false, isOpen: false },
            { isHigh: false, isWide: true, isOpen: false },
            { isHigh: false, isWide: false, isOpen: false },
        ],
        [
            { isHigh: true, isWide: false, isOpen: false },
            { isHigh: true, isWide: true },
            { isHigh: true, isWide: false, isOpen: false },
            { isHigh: true, isWide: true },
            { isHigh: true, isWide: false, isOpen: false },
            { isHigh: true, isWide: true },
            { isHigh: true, isWide: false, isOpen: false },
        ],
        [
            { isHigh: false, isWide: false, isOpen: false },
            { isHigh: false, isWide: true, isOpen: false },
            { isHigh: false, isWide: false, isOpen: false },
            { isHigh: false, isWide: true, isOpen: false },
            { isHigh: false, isWide: false, isOpen: false },
            { isHigh: false, isWide: true, isOpen: false },
            { isHigh: false, isWide: false, isOpen: false },
        ] */
    ]
};