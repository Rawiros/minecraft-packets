/**
 * Name: advancements
 * State: PLAY
 * Normalized Name: Advancements
 * Minecraft Version: 1.18.2
 * ISO Creation Date: 2022-08-31T23:01:00.632Z
 * Creation Date: Thu Sep 01 2022 01:01:00 GMT+0200 (Central European Summer Time)
 */
// Define Default Packet Data
let PacketData = {
    "reset": true,
    "advancementMapping": [
        {
            "key": "adventure:root",
            "value": {
                "displayData": {
                    "title": "{\"text\":\"First Advancement\"}",
                    "description": "{\"text\":\"Description\"}",
                    "icon": {
                        "present": true,
                        "itemId": 858,
                        "itemCount": 1
                    },
                    "frameType": 0,
                    "flags": {
                        "_unused": 0,
                        "hidden": 0,
                        "show_toast": 1,
                        "has_background_texture": 1
                    },
                    "backgroundTexture": "minecraft:textures/gui/advancements/backgrounds/stone.png",
                    "xCord": 0,
                    "yCord": 0.5
                },
                "criteria": [
                    {
                        "key": "AdvancementTreeRoot"
                    }
                ],
                "requirements": [
                    [
                        "AdvancementTreeRoot"
                    ]
                ]
            }
        },
        {
            "key": "adventure:adv1",
            "value": {
                "parentId": "adventure:root",
                "displayData": {
                    "title": "{\"text\":\"Second Advancement\"}",
                    "description": "{\"text\":\"Description\"}",
                    "icon": {
                        "present": true,
                        "itemId": 871,
                        "itemCount": 1
                    },
                    "frameType": 0,
                    "flags": {
                        "_unused": 0,
                        "hidden": 0,
                        "show_toast": 1,
                        "has_background_texture": 0
                    },
                    "xCord": 1,
                    "yCord": 0
                },
                "criteria": [
                    {
                        "key": "AdvancementTreeSecond"
                    }
                ],
                "requirements": [
                    [
                        "AdvancementTreeSecond"
                    ]
                ]
            }
        },
        {
            "key": "adventure:adv2",
            "value": {
                "parentId": "adventure:adv1",
                "displayData": {
                    "title": "{\"text\":\"Last Advancement\"}",
                    "description": "{\"text\":\"Description\"}",
                    "icon": {
                        "present": true,
                        "itemId": 998,
                        "itemCount": 1
                    },
                    "frameType": 0,
                    "flags": {
                        "_unused": 0,
                        "hidden": 0,
                        "show_toast": 1,
                        "has_background_texture": 0
                    },
                    "xCord": 2,
                    "yCord": 0
                },
                "criteria": [
                    {
                        "key": "AdvancementTreeLast"
                    }
                ],
                "requirements": [
                    [
                        "AdvancementTreeLast"
                    ]
                ]
            }
        },
        {
            "key": "adventure:adv3",
            "value": {
                "parentId": "adventure:root",
                "displayData": {
                    "title": "{\"text\":\"First Child Advancement\"}",
                    "description": "{\"text\":\"Description\"}",
                    "icon": {
                        "present": true,
                        "itemId": 311,
                        "itemCount": 1
                    },
                    "frameType": 0,
                    "flags": {
                        "_unused": 0,
                        "hidden": 0,
                        "show_toast": 1,
                        "has_background_texture": 0
                    },
                    "xCord": 1,
                    "yCord": 1
                },
                "criteria": [
                    {
                        "key": "AdvancementTreeFirstChild"
                    }
                ],
                "requirements": [
                    [
                        "AdvancementTreeFirstChild"
                    ]
                ]
            }
        }
    ],
    "identifiers": [],
    "progressMapping": [
        {
            "key": "adventure:root",
            "value": [
                {
                    "criterionIdentifier": "AdvancementTreeRoot",
                    "criterionProgress": [
                        386,
                        -165642552
                    ]
                }
            ]
        },
        {
            "key": "adventure:adv2",
            "value": [
                {
                    "criterionIdentifier": "AdvancementTreeLast"
                }
            ]
        },
        {
            "key": "adventure:adv1",
            "value": [
                {
                    "criterionIdentifier": "AdvancementTreeSecond",
                    "criterionProgress": [
                        386,
                        -165638552
                    ]
                }
            ]
        },
        {
            "key": "adventure:adv3",
            "value": [
                {
                    "criterionIdentifier": "AdvancementTreeFirstChild",
                    "criterionProgress": [
                        386,
                        -165634552
                    ]
                }
            ]
        }
    ]
};
// Export Default Packet Data as Default
export default PacketData;