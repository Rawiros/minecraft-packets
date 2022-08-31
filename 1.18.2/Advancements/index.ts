/**
 * Name: advancements
 * State: PLAY
 * Normalized Name: Advancements
 * Minecraft Version: 1.18.2
 * ISO Creation Date: 2022-08-31T16:07:27.885Z
 * Creation Date: Wed Aug 31 2022 18:07:27 GMT+0200 (Central European Summer Time)
 */
// Define Default Packet Data
let PacketData = {
    "reset": false,
    "advancementMapping": [
        {
            "key": "blazeandcave:adventure/mapmaker",
            "value": {
                "parentId": "blazeandcave:adventure/knowledge_is_power",
                "displayData": {
                    "title": "{\"translate\":\"Mapmaker\"}",
                    "description": "{\"translate\":\"Craft or trade an empty map\"}",
                    "icon": {
                        "present": true,
                        "itemId": 951,
                        "itemCount": 1
                    },
                    "frameType": 0,
                    "flags": {
                        "_unused": 0,
                        "hidden": 0,
                        "show_toast": 1,
                        "has_background_texture": 0
                    },
                    "xCord": 4,
                    "yCord": 15.5
                },
                "criteria": [
                    {
                        "key": "map"
                    }
                ],
                "requirements": [
                    [
                        "map"
                    ]
                ]
            }
        },
        {
            "key": "blazeandcave:adventure/knowledge_is_power",
            "value": {
                "parentId": "minecraft:adventure/trade",
                "displayData": {
                    "title": "{\"translate\":\"Knowledge is Power\"}",
                    "description": "{\"translate\":\"Trade for an Enchanted Book\"}",
                    "icon": {
                        "present": true,
                        "itemId": 963,
                        "itemCount": 1
                    },
                    "frameType": 0,
                    "flags": {
                        "_unused": 0,
                        "hidden": 0,
                        "show_toast": 1,
                        "has_background_texture": 0
                    },
                    "xCord": 3,
                    "yCord": 16
                },
                "criteria": [
                    {
                        "key": "trade"
                    }
                ],
                "requirements": [
                    [
                        "trade"
                    ]
                ]
            }
        },
        {
            "key": "minecraft:adventure/trade",
            "value": {
                "parentId": "blazeandcave:adventure/do_you_want_to_trade",
                "displayData    ": {
                    "title": "{\"translate\":\"What a Deal!\"}",
                    "description": "{\"translate\":\"Successfully trade with a Villager\"}",
                    "icon": {
                        "present": true,
                        "itemId": 687,
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
                    "yCord": 12.25
                },
                "criteria": [
                    {
                        "key": "trade"
                    }
                ],
                "requirements": [
                    [
                        "trade"
                    ]
                ]
            }
        },
        {
            "key": "blazeandcave:adventure/do_you_want_to_trade",
            "value": {
                "parentId": "minecraft:adventure/root",
                "displayData": {
                    "title": "{\"translate\":\"Do You Want to Trade?\"}",
                    "description": "{\"translate\":\"Find an NPC village\"}",
                    "icon": {
                        "present": true,
                        "itemId": 22,
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
                    "yCord": 12.25
                },
                "criteria": [
                    {
                        "key": "village"
                    }
                ],
                "requirements": [
                    [
                        "village"
                    ]
                ]
            }
        },
        {
            "key": "minecraft:adventure/root",
            "value": {
                "displayData": {
                    "title": "{\"translate\":\"Adventure\"}",
                    "description": "{\"translate\":\"Village, Pillage and Dungeons!\"}",
                    "icon": {
                        "present": true,
                        "itemId": 951,
                        "itemCount": 1
                    },
                    "frameType": 0,
                    "flags": {
                        "_unused": 0,
                        "hidden": 0,
                        "show_toast": 0,
                        "has_background_texture": 1
                    },
                    "backgroundTexture": "minecraft:textures/gui/advancements/backgrounds/adventure.png",
                    "xCord": 0,
                    "yCord": 7.125
                },
                "criteria": [
                    {
                        "key": "killed_by_something"
                    },
                    {
                        "key": "killed_something"
                    }
                ],
                "requirements": [
                    [
                        "killed_something",
                        "killed_by_something"
                    ]
                ]
            }
        },
        {
            "key": "blazeandcave:adventure/mapmakers_table",
            "value": {
                "parentId": "blazeandcave:adventure/mapmaker",
                "displayData": {
                    "title": "{\"translate\":\"Mapmaker's Table\"}",
                    "description": "{\"translate\":\"Craft a cartography table with paper and planks\"}",
                    "icon": {
                        "present": true,
                        "itemId": 1046,
                        "itemCount": 1
                    },
                    "frameType": 0,
                    "flags": {
                        "_unused": 0,
                        "hidden": 0,
                        "show_toast": 1,
                        "has_background_texture": 0
                    },
                    "xCord": 5,
                    "yCord": 14.5
                },
                "criteria": [
                    {
                        "key": "cartography_table"
                    }
                ],
                "requirements": [
                    [
                        "cartography_table"
                    ]
                ]
            }
        },
        {
            "key": "blazeandcave:adventure/im_not_lost_anymore",
            "value": {
                "parentId": "blazeandcave:adventure/mapmakers_table",
                "displayData": {
                    "title": "{\"translate\":\"I'm not lost anymore!\"}",
                    "description": "{\"translate\":\"Right-click a banner with a map\"}",
                    "icon": {
                        "present": true,
                        "itemId": 993,
                        "itemCount": 1
                    },
                    "frameType": 0,
                    "flags": {
                        "_unused": 0,
                        "hidden": 0,
                        "show_toast": 1,
                        "has_background_texture": 0
                    },
                    "xCord": 6,
                    "yCord": 14.5
                },
                "criteria": [
                    {
                        "key": "map"
                    }
                ],
                "requirements": [
                    [
                        "map"
                    ]
                ]
            }
        },
        {
            "key": "blazeandcave:adventure/treasure_map",
            "value": {
                "parentId": "blazeandcave:adventure/mapmaker",
                "displayData": {
                    "title": "{\"translate\":\"Treasure Map\"}",
                    "description": "{\"translate\":\"Trade for an Explorer Map\"}",
                    "icon": {
                        "present": true,
                        "itemId": 847,
                        "itemCount": 1
                    },
                    "frameType": 2,
                    "flags": {
                        "_unused": 0,
                        "hidden": 0,
                        "show_toast": 1,
                        "has_background_texture": 0
                    },
                    "xCord": 5,
                    "yCord": 16.5
                },
                "criteria": [
                    {
                        "key": "trade"
                    }
                ],
                "requirements": [
                    [
                        "trade"
                    ]
                ]
            }
        },
        {
            "key": "blazeandcave:adventure/house_of_psychos",
            "value": {
                "parentId": "blazeandcave:adventure/treasure_map",
                "displayData": {
                    "title": "{\"translate\":\"House of Psychos\"}",
                    "description": "{\"translate\":\"Find a Woodland Mansion\"}",
                    "icon": {
                        "present": true,
                        "itemId": 637,
                        "itemCount": 1
                    },
                    "frameType": 0,
                    "flags": {
                        "_unused": 0,
                        "hidden": 0,
                        "show_toast": 1,
                        "has_background_texture": 0
                    },
                    "xCord": 6,
                    "yCord": 15.5
                },
                "criteria": [
                    {
                        "key": "mansion"
                    }
                ],
                "requirements": [
                    [
                        "mansion"
                    ]
                ]
            }
        },
        {
            "key": "blazeandcave:adventure/monumental",
            "value": {
                "parentId": "blazeandcave:adventure/treasure_map",
                "displayData": {
                    "title": "{\"translate\":\"Monumental\"}",
                    "description": "{\"translate\":\"Find an Ocean Monument\"}",
                    "icon": {
                        "present": true,
                        "itemId": 432,
                        "itemCount": 1
                    },
                    "frameType": 0,
                    "flags": {
                        "_unused": 0,
                        "hidden": 0,
                        "show_toast": 1,
                        "has_background_texture": 0
                    },
                    "xCord": 6,
                    "yCord": 17.5
                },
                "criteria": [
                    {
                        "key": "monument"
                    }
                ],
                "requirements": [
                    [
                        "monument"
                    ]
                ]
            }
        }
    ],
    "identifiers": [],
    "progressMapping": [
        {
            "key": "blazeandcave:adventure/im_not_lost_anymore",
            "value": [
                {
                    "criterionIdentifier": "map"
                }
            ]
        },
        {
            "key": "blazeandcave:adventure/do_you_want_to_trade",
            "value": [
                {
                    "criterionIdentifier": "village"
                }
            ]
        },
        {
            "key": "minecraft:adventure/trade",
            "value": [
                {
                    "criterionIdentifier": "trade"
                }
            ]
        },
        {
            "key": "blazeandcave:adventure/monumental",
            "value": [
                {
                    "criterionIdentifier": "monument"
                }
            ]
        },
        {
            "key": "blazeandcave:adventure/treasure_map",
            "value": [
                {
                    "criterionIdentifier": "trade"
                }
            ]
        },
        {
            "key": "minecraft:adventure/root",
            "value": [
                {
                    "criterionIdentifier": "killed_by_something"
                },
                {
                    "criterionIdentifier": "killed_something"
                }
            ]
        },
        {
            "key": "blazeandcave:adventure/mapmaker",
            "value": [
                {
                    "criterionIdentifier": "map",
                    "criterionProgress": [
                        386,
                        -190295734
                    ]
                }
            ]
        },
        {
            "key": "blazeandcave:adventure/knowledge_is_power",
            "value": [
                {
                    "criterionIdentifier": "trade"
                }
            ]
        },
        {
            "key": "blazeandcave:adventure/mapmakers_table",
            "value": [
                {
                    "criterionIdentifier": "cartography_table"
                }
            ]
        },
        {
            "key": "blazeandcave:adventure/house_of_psychos",
            "value": [
                {
                    "criterionIdentifier": "mansion"
                }
            ]
        }
    ]
};
// Export Default Packet Data as Default
export default PacketData;