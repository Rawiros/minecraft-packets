/**
 * Name: login
 * State: PLAY
 * Normalized Name: Login
 * Minecraft Version: 1.18.2
 * ISO Creation Date: 2022-08-31T16:07:26.215Z
 * Creation Date: Wed Aug 31 2022 18:07:26 GMT+0200 (Central European Summer Time)
 */
// Define Default Packet Data
let PacketData = {
    "entityId": 71,
    "isHardcore": false,
    "gameMode": 0,
    "previousGameMode": -1,
    "worldNames": [
        "minecraft:overworld",
        "minecraft:the_nether",
        "minecraft:the_end"
    ],
    "dimensionCodec": {
        "type": "compound",
        "name": "",
        "value": {
            "minecraft:dimension_type": {
                "type": "compound",
                "value": {
                    "type": {
                        "type": "string",
                        "value": "minecraft:dimension_type"
                    },
                    "value": {
                        "type": "list",
                        "value": {
                            "type": "compound",
                            "value": [
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:overworld"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 0
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "infiniburn": {
                                                "type": "string",
                                                "value": "#minecraft:infiniburn_overworld"
                                            },
                                            "effects": {
                                                "type": "string",
                                                "value": "minecraft:overworld"
                                            },
                                            "ultrawarm": {
                                                "type": "byte",
                                                "value": 0
                                            },
                                            "logical_height": {
                                                "type": "int",
                                                "value": 384
                                            },
                                            "height": {
                                                "type": "int",
                                                "value": 384
                                            },
                                            "natural": {
                                                "type": "byte",
                                                "value": 1
                                            },
                                            "min_y": {
                                                "type": "int",
                                                "value": -64
                                            },
                                            "bed_works": {
                                                "type": "byte",
                                                "value": 1
                                            },
                                            "coordinate_scale": {
                                                "type": "double",
                                                "value": 1
                                            },
                                            "piglin_safe": {
                                                "type": "byte",
                                                "value": 0
                                            },
                                            "has_skylight": {
                                                "type": "byte",
                                                "value": 1
                                            },
                                            "has_ceiling": {
                                                "type": "byte",
                                                "value": 0
                                            },
                                            "ambient_light": {
                                                "type": "float",
                                                "value": 0
                                            },
                                            "has_raids": {
                                                "type": "byte",
                                                "value": 1
                                            },
                                            "respawn_anchor_works": {
                                                "type": "byte",
                                                "value": 0
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:overworld_caves"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 1
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "infiniburn": {
                                                "type": "string",
                                                "value": "#minecraft:infiniburn_overworld"
                                            },
                                            "effects": {
                                                "type": "string",
                                                "value": "minecraft:overworld"
                                            },
                                            "ultrawarm": {
                                                "type": "byte",
                                                "value": 0
                                            },
                                            "logical_height": {
                                                "type": "int",
                                                "value": 384
                                            },
                                            "height": {
                                                "type": "int",
                                                "value": 384
                                            },
                                            "natural": {
                                                "type": "byte",
                                                "value": 1
                                            },
                                            "min_y": {
                                                "type": "int",
                                                "value": -64
                                            },
                                            "bed_works": {
                                                "type": "byte",
                                                "value": 1
                                            },
                                            "coordinate_scale": {
                                                "type": "double",
                                                "value": 1
                                            },
                                            "piglin_safe": {
                                                "type": "byte",
                                                "value": 0
                                            },
                                            "has_skylight": {
                                                "type": "byte",
                                                "value": 1
                                            },
                                            "has_ceiling": {
                                                "type": "byte",
                                                "value": 1
                                            },
                                            "ambient_light": {
                                                "type": "float",
                                                "value": 0
                                            },
                                            "has_raids": {
                                                "type": "byte",
                                                "value": 1
                                            },
                                            "respawn_anchor_works": {
                                                "type": "byte",
                                                "value": 0
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:the_nether"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 2
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "infiniburn": {
                                                "type": "string",
                                                "value": "#minecraft:infiniburn_nether"
                                            },
                                            "effects": {
                                                "type": "string",
                                                "value": "minecraft:the_nether"
                                            },
                                            "ultrawarm": {
                                                "type": "byte",
                                                "value": 1
                                            },
                                            "logical_height": {
                                                "type": "int",
                                                "value": 128
                                            },
                                            "height": {
                                                "type": "int",
                                                "value": 256
                                            },
                                            "natural": {
                                                "type": "byte",
                                                "value": 0
                                            },
                                            "min_y": {
                                                "type": "int",
                                                "value": 0
                                            },
                                            "bed_works": {
                                                "type": "byte",
                                                "value": 0
                                            },
                                            "fixed_time": {
                                                "type": "long",
                                                "value": [
                                                    0,
                                                    18000
                                                ]
                                            },
                                            "coordinate_scale": {
                                                "type": "double",
                                                "value": 8
                                            },
                                            "piglin_safe": {
                                                "type": "byte",
                                                "value": 1
                                            },
                                            "has_ceiling": {
                                                "type": "byte",
                                                "value": 1
                                            },
                                            "has_skylight": {
                                                "type": "byte",
                                                "value": 0
                                            },
                                            "ambient_light": {
                                                "type": "float",
                                                "value": 0.10000000149011612
                                            },
                                            "has_raids": {
                                                "type": "byte",
                                                "value": 0
                                            },
                                            "respawn_anchor_works": {
                                                "type": "byte",
                                                "value": 1
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:the_end"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 3
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "infiniburn": {
                                                "type": "string",
                                                "value": "#minecraft:infiniburn_end"
                                            },
                                            "effects": {
                                                "type": "string",
                                                "value": "minecraft:the_end"
                                            },
                                            "ultrawarm": {
                                                "type": "byte",
                                                "value": 0
                                            },
                                            "logical_height": {
                                                "type": "int",
                                                "value": 256
                                            },
                                            "height": {
                                                "type": "int",
                                                "value": 256
                                            },
                                            "natural": {
                                                "type": "byte",
                                                "value": 0
                                            },
                                            "min_y": {
                                                "type": "int",
                                                "value": 0
                                            },
                                            "bed_works": {
                                                "type": "byte",
                                                "value": 0
                                            },
                                            "fixed_time": {
                                                "type": "long",
                                                "value": [
                                                    0,
                                                    6000
                                                ]
                                            },
                                            "coordinate_scale": {
                                                "type": "double",
                                                "value": 1
                                            },
                                            "piglin_safe": {
                                                "type": "byte",
                                                "value": 0
                                            },
                                            "has_ceiling": {
                                                "type": "byte",
                                                "value": 0
                                            },
                                            "has_skylight": {
                                                "type": "byte",
                                                "value": 0
                                            },
                                            "ambient_light": {
                                                "type": "float",
                                                "value": 0
                                            },
                                            "has_raids": {
                                                "type": "byte",
                                                "value": 1
                                            },
                                            "respawn_anchor_works": {
                                                "type": "byte",
                                                "value": 0
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    }
                }
            },
            "minecraft:worldgen/biome": {
                "type": "compound",
                "value": {
                    "type": {
                        "type": "string",
                        "value": "minecraft:worldgen/biome"
                    },
                    "value": {
                        "type": "list",
                        "value": {
                            "type": "compound",
                            "value": [
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:the_void"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 0
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "none"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8103167
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "none"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:plains"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 1
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "plains"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.800000011920929
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.4000000059604645
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 7907327
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:sunflower_plains"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 2
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "plains"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.800000011920929
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.4000000059604645
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 7907327
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:snowy_plains"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 3
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "icy"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8364543
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "snow"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:ice_spikes"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 4
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "icy"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8364543
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "snow"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:desert"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 5
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "desert"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 2
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 7254527
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "none"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:swamp"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 6
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "swamp"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.800000011920929
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.8999999761581421
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 2302743
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 6388580
                                                    },
                                                    "foliage_color": {
                                                        "type": "int",
                                                        "value": 6975545
                                                    },
                                                    "grass_color_modifier": {
                                                        "type": "string",
                                                        "value": "swamp"
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 7907327
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:forest"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 7
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "forest"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.699999988079071
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.800000011920929
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 7972607
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:flower_forest"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 8
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "forest"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.699999988079071
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.800000011920929
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 7972607
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:birch_forest"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 9
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "forest"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.6000000238418579
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.6000000238418579
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8037887
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:dark_forest"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 10
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "forest"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.699999988079071
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.800000011920929
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "grass_color_modifier": {
                                                        "type": "string",
                                                        "value": "dark_forest"
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 7972607
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:old_growth_birch_forest"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 11
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "forest"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.6000000238418579
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.6000000238418579
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8037887
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:old_growth_pine_taiga"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 12
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "taiga"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.30000001192092896
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.800000011920929
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8168447
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:old_growth_spruce_taiga"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 13
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "taiga"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.25
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.800000011920929
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8233983
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:taiga"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 14
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "taiga"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.25
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.800000011920929
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8233983
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:snowy_taiga"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 15
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "taiga"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": -0.5
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.4000000059604645
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4020182
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8625919
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "snow"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:savanna"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 16
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "savanna"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 2
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 7254527
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "none"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:savanna_plateau"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 17
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "savanna"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 2
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 7254527
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "none"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:windswept_hills"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 18
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "extreme_hills"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.20000000298023224
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.30000001192092896
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8233727
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:windswept_gravelly_hills"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 19
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "extreme_hills"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.20000000298023224
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.30000001192092896
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8233727
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:windswept_forest"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 20
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "extreme_hills"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.20000000298023224
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.30000001192092896
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8233727
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:windswept_savanna"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 21
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "savanna"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 2
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 7254527
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "none"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:jungle"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 22
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "jungle"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.949999988079071
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.8999999761581421
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 7842047
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:sparse_jungle"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 23
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "jungle"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.949999988079071
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.800000011920929
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 7842047
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:bamboo_jungle"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 24
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "jungle"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.949999988079071
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.8999999761581421
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 7842047
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:badlands"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 25
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "mesa"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 2
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "grass_color": {
                                                        "type": "int",
                                                        "value": 9470285
                                                    },
                                                    "foliage_color": {
                                                        "type": "int",
                                                        "value": 10387789
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 7254527
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "none"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:eroded_badlands"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 26
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "mesa"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 2
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "grass_color": {
                                                        "type": "int",
                                                        "value": 9470285
                                                    },
                                                    "foliage_color": {
                                                        "type": "int",
                                                        "value": 10387789
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 7254527
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "none"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:wooded_badlands"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 27
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "mesa"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 2
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "grass_color": {
                                                        "type": "int",
                                                        "value": 9470285
                                                    },
                                                    "foliage_color": {
                                                        "type": "int",
                                                        "value": 10387789
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 7254527
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "none"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:meadow"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 28
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "mountain"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.800000011920929
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 937679
                                                    },
                                                    "music": {
                                                        "type": "compound",
                                                        "value": {
                                                            "max_delay": {
                                                                "type": "int",
                                                                "value": 24000
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:music.overworld.meadow"
                                                            },
                                                            "replace_current_music": {
                                                                "type": "byte",
                                                                "value": 0
                                                            },
                                                            "min_delay": {
                                                                "type": "int",
                                                                "value": 12000
                                                            }
                                                        }
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8103167
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:grove"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 29
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "forest"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": -0.20000000298023224
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.800000011920929
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "music": {
                                                        "type": "compound",
                                                        "value": {
                                                            "max_delay": {
                                                                "type": "int",
                                                                "value": 24000
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:music.overworld.grove"
                                                            },
                                                            "replace_current_music": {
                                                                "type": "byte",
                                                                "value": 0
                                                            },
                                                            "min_delay": {
                                                                "type": "int",
                                                                "value": 12000
                                                            }
                                                        }
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8495359
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "snow"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:snowy_slopes"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 30
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "mountain"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": -0.30000001192092896
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.8999999761581421
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "music": {
                                                        "type": "compound",
                                                        "value": {
                                                            "max_delay": {
                                                                "type": "int",
                                                                "value": 24000
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:music.overworld.snowy_slopes"
                                                            },
                                                            "replace_current_music": {
                                                                "type": "byte",
                                                                "value": 0
                                                            },
                                                            "min_delay": {
                                                                "type": "int",
                                                                "value": 12000
                                                            }
                                                        }
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8560639
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "snow"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:frozen_peaks"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 31
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "mountain"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": -0.699999988079071
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.8999999761581421
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "music": {
                                                        "type": "compound",
                                                        "value": {
                                                            "max_delay": {
                                                                "type": "int",
                                                                "value": 24000
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:music.overworld.frozen_peaks"
                                                            },
                                                            "replace_current_music": {
                                                                "type": "byte",
                                                                "value": 0
                                                            },
                                                            "min_delay": {
                                                                "type": "int",
                                                                "value": 12000
                                                            }
                                                        }
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8756735
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "snow"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:jagged_peaks"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 32
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "mountain"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": -0.699999988079071
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.8999999761581421
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "music": {
                                                        "type": "compound",
                                                        "value": {
                                                            "max_delay": {
                                                                "type": "int",
                                                                "value": 24000
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:music.overworld.jagged_peaks"
                                                            },
                                                            "replace_current_music": {
                                                                "type": "byte",
                                                                "value": 0
                                                            },
                                                            "min_delay": {
                                                                "type": "int",
                                                                "value": 12000
                                                            }
                                                        }
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8756735
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "snow"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:stony_peaks"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 33
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "mountain"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 1
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.30000001192092896
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "music": {
                                                        "type": "compound",
                                                        "value": {
                                                            "max_delay": {
                                                                "type": "int",
                                                                "value": 24000
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:music.overworld.stony_peaks"
                                                            },
                                                            "replace_current_music": {
                                                                "type": "byte",
                                                                "value": 0
                                                            },
                                                            "min_delay": {
                                                                "type": "int",
                                                                "value": 12000
                                                            }
                                                        }
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 7776511
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:river"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 34
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "river"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8103167
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:frozen_river"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 35
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "river"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 3750089
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8364543
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "snow"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:beach"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 36
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "beach"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.800000011920929
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.4000000059604645
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 7907327
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:snowy_beach"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 37
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "beach"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.05000000074505806
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.30000001192092896
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4020182
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8364543
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "snow"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:stony_shore"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 38
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "beach"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.20000000298023224
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.30000001192092896
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8233727
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:warm_ocean"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 39
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "ocean"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 270131
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4445678
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8103167
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:lukewarm_ocean"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 40
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "ocean"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 267827
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4566514
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8103167
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:deep_lukewarm_ocean"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 41
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "ocean"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 267827
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4566514
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8103167
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:ocean"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 42
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "ocean"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8103167
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:deep_ocean"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 43
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "ocean"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8103167
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:cold_ocean"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 44
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "ocean"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4020182
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8103167
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:deep_cold_ocean"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 45
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "ocean"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4020182
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8103167
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:frozen_ocean"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 46
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "ocean"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "temperature_modifier": {
                                                "type": "string",
                                                "value": "frozen"
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 3750089
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8364543
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "snow"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:deep_frozen_ocean"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 47
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "ocean"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "temperature_modifier": {
                                                "type": "string",
                                                "value": "frozen"
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 3750089
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8103167
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:mushroom_fields"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 48
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "mushroom"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.8999999761581421
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 1
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 7842047
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:dripstone_caves"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 49
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "underground"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.800000011920929
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.4000000059604645
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "music": {
                                                        "type": "compound",
                                                        "value": {
                                                            "max_delay": {
                                                                "type": "int",
                                                                "value": 24000
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:music.overworld.dripstone_caves"
                                                            },
                                                            "replace_current_music": {
                                                                "type": "byte",
                                                                "value": 0
                                                            },
                                                            "min_delay": {
                                                                "type": "int",
                                                                "value": 12000
                                                            }
                                                        }
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 7907327
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:lush_caves"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 50
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "underground"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "music": {
                                                        "type": "compound",
                                                        "value": {
                                                            "max_delay": {
                                                                "type": "int",
                                                                "value": 24000
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:music.overworld.lush_caves"
                                                            },
                                                            "replace_current_music": {
                                                                "type": "byte",
                                                                "value": 0
                                                            },
                                                            "min_delay": {
                                                                "type": "int",
                                                                "value": 12000
                                                            }
                                                        }
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 12638463
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 8103167
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "rain"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:nether_wastes"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 51
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "nether"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 2
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "music": {
                                                        "type": "compound",
                                                        "value": {
                                                            "max_delay": {
                                                                "type": "int",
                                                                "value": 24000
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:music.nether.nether_wastes"
                                                            },
                                                            "replace_current_music": {
                                                                "type": "byte",
                                                                "value": 0
                                                            },
                                                            "min_delay": {
                                                                "type": "int",
                                                                "value": 12000
                                                            }
                                                        }
                                                    },
                                                    "additions_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.nether_wastes.additions"
                                                            },
                                                            "tick_chance": {
                                                                "type": "double",
                                                                "value": 0.0111
                                                            }
                                                        }
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 3344392
                                                    },
                                                    "ambient_sound": {
                                                        "type": "string",
                                                        "value": "minecraft:ambient.nether_wastes.loop"
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.nether_wastes.mood"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 7254527
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "none"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:warped_forest"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 52
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "nether"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 2
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "music": {
                                                        "type": "compound",
                                                        "value": {
                                                            "max_delay": {
                                                                "type": "int",
                                                                "value": 24000
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:music.nether.warped_forest"
                                                            },
                                                            "replace_current_music": {
                                                                "type": "byte",
                                                                "value": 0
                                                            },
                                                            "min_delay": {
                                                                "type": "int",
                                                                "value": 12000
                                                            }
                                                        }
                                                    },
                                                    "additions_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.warped_forest.additions"
                                                            },
                                                            "tick_chance": {
                                                                "type": "double",
                                                                "value": 0.0111
                                                            }
                                                        }
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 1705242
                                                    },
                                                    "particle": {
                                                        "type": "compound",
                                                        "value": {
                                                            "options": {
                                                                "type": "compound",
                                                                "value": {
                                                                    "type": {
                                                                        "type": "string",
                                                                        "value": "minecraft:warped_spore"
                                                                    }
                                                                }
                                                            },
                                                            "probability": {
                                                                "type": "float",
                                                                "value": 0.014279999770224094
                                                            }
                                                        }
                                                    },
                                                    "ambient_sound": {
                                                        "type": "string",
                                                        "value": "minecraft:ambient.warped_forest.loop"
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.warped_forest.mood"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 7254527
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "none"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:crimson_forest"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 53
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "nether"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 2
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "music": {
                                                        "type": "compound",
                                                        "value": {
                                                            "max_delay": {
                                                                "type": "int",
                                                                "value": 24000
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:music.nether.crimson_forest"
                                                            },
                                                            "replace_current_music": {
                                                                "type": "byte",
                                                                "value": 0
                                                            },
                                                            "min_delay": {
                                                                "type": "int",
                                                                "value": 12000
                                                            }
                                                        }
                                                    },
                                                    "additions_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.crimson_forest.additions"
                                                            },
                                                            "tick_chance": {
                                                                "type": "double",
                                                                "value": 0.0111
                                                            }
                                                        }
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 3343107
                                                    },
                                                    "particle": {
                                                        "type": "compound",
                                                        "value": {
                                                            "options": {
                                                                "type": "compound",
                                                                "value": {
                                                                    "type": {
                                                                        "type": "string",
                                                                        "value": "minecraft:crimson_spore"
                                                                    }
                                                                }
                                                            },
                                                            "probability": {
                                                                "type": "float",
                                                                "value": 0.02500000037252903
                                                            }
                                                        }
                                                    },
                                                    "ambient_sound": {
                                                        "type": "string",
                                                        "value": "minecraft:ambient.crimson_forest.loop"
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.crimson_forest.mood"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 7254527
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "none"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:soul_sand_valley"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 54
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "nether"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 2
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "music": {
                                                        "type": "compound",
                                                        "value": {
                                                            "max_delay": {
                                                                "type": "int",
                                                                "value": 24000
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:music.nether.soul_sand_valley"
                                                            },
                                                            "replace_current_music": {
                                                                "type": "byte",
                                                                "value": 0
                                                            },
                                                            "min_delay": {
                                                                "type": "int",
                                                                "value": 12000
                                                            }
                                                        }
                                                    },
                                                    "additions_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.soul_sand_valley.additions"
                                                            },
                                                            "tick_chance": {
                                                                "type": "double",
                                                                "value": 0.0111
                                                            }
                                                        }
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 1787717
                                                    },
                                                    "particle": {
                                                        "type": "compound",
                                                        "value": {
                                                            "options": {
                                                                "type": "compound",
                                                                "value": {
                                                                    "type": {
                                                                        "type": "string",
                                                                        "value": "minecraft:ash"
                                                                    }
                                                                }
                                                            },
                                                            "probability": {
                                                                "type": "float",
                                                                "value": 0.0062500000931322575
                                                            }
                                                        }
                                                    },
                                                    "ambient_sound": {
                                                        "type": "string",
                                                        "value": "minecraft:ambient.soul_sand_valley.loop"
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.soul_sand_valley.mood"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 7254527
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "none"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:basalt_deltas"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 55
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "nether"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 2
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "music": {
                                                        "type": "compound",
                                                        "value": {
                                                            "max_delay": {
                                                                "type": "int",
                                                                "value": 24000
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:music.nether.basalt_deltas"
                                                            },
                                                            "replace_current_music": {
                                                                "type": "byte",
                                                                "value": 0
                                                            },
                                                            "min_delay": {
                                                                "type": "int",
                                                                "value": 12000
                                                            }
                                                        }
                                                    },
                                                    "additions_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.basalt_deltas.additions"
                                                            },
                                                            "tick_chance": {
                                                                "type": "double",
                                                                "value": 0.0111
                                                            }
                                                        }
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 6840176
                                                    },
                                                    "particle": {
                                                        "type": "compound",
                                                        "value": {
                                                            "options": {
                                                                "type": "compound",
                                                                "value": {
                                                                    "type": {
                                                                        "type": "string",
                                                                        "value": "minecraft:white_ash"
                                                                    }
                                                                }
                                                            },
                                                            "probability": {
                                                                "type": "float",
                                                                "value": 0.1180933341383934
                                                            }
                                                        }
                                                    },
                                                    "ambient_sound": {
                                                        "type": "string",
                                                        "value": "minecraft:ambient.basalt_deltas.loop"
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.basalt_deltas.mood"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 7254527
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "none"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:the_end"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 56
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "the_end"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 10518688
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 0
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "none"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:end_highlands"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 57
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "the_end"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 10518688
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 0
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "none"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:end_midlands"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 58
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "the_end"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 10518688
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 0
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "none"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:small_end_islands"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 59
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "the_end"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 10518688
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 0
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "none"
                                            }
                                        }
                                    }
                                },
                                {
                                    "name": {
                                        "type": "string",
                                        "value": "minecraft:end_barrens"
                                    },
                                    "id": {
                                        "type": "int",
                                        "value": 60
                                    },
                                    "element": {
                                        "type": "compound",
                                        "value": {
                                            "category": {
                                                "type": "string",
                                                "value": "the_end"
                                            },
                                            "temperature": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "downfall": {
                                                "type": "float",
                                                "value": 0.5
                                            },
                                            "effects": {
                                                "type": "compound",
                                                "value": {
                                                    "water_fog_color": {
                                                        "type": "int",
                                                        "value": 329011
                                                    },
                                                    "water_color": {
                                                        "type": "int",
                                                        "value": 4159204
                                                    },
                                                    "fog_color": {
                                                        "type": "int",
                                                        "value": 10518688
                                                    },
                                                    "mood_sound": {
                                                        "type": "compound",
                                                        "value": {
                                                            "offset": {
                                                                "type": "double",
                                                                "value": 2
                                                            },
                                                            "sound": {
                                                                "type": "string",
                                                                "value": "minecraft:ambient.cave"
                                                            },
                                                            "block_search_extent": {
                                                                "type": "int",
                                                                "value": 8
                                                            },
                                                            "tick_delay": {
                                                                "type": "int",
                                                                "value": 6000
                                                            }
                                                        }
                                                    },
                                                    "sky_color": {
                                                        "type": "int",
                                                        "value": 0
                                                    }
                                                }
                                            },
                                            "precipitation": {
                                                "type": "string",
                                                "value": "none"
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    }
                }
            }
        }
    },
    "dimension": {
        "type": "compound",
        "name": "",
        "value": {
            "infiniburn": {
                "type": "string",
                "value": "#minecraft:infiniburn_overworld"
            },
            "effects": {
                "type": "string",
                "value": "minecraft:overworld"
            },
            "ultrawarm": {
                "type": "byte",
                "value": 0
            },
            "logical_height": {
                "type": "int",
                "value": 384
            },
            "height": {
                "type": "int",
                "value": 384
            },
            "natural": {
                "type": "byte",
                "value": 1
            },
            "min_y": {
                "type": "int",
                "value": -64
            },
            "bed_works": {
                "type": "byte",
                "value": 1
            },
            "coordinate_scale": {
                "type": "double",
                "value": 1
            },
            "piglin_safe": {
                "type": "byte",
                "value": 0
            },
            "has_skylight": {
                "type": "byte",
                "value": 1
            },
            "has_ceiling": {
                "type": "byte",
                "value": 0
            },
            "ambient_light": {
                "type": "float",
                "value": 0
            },
            "has_raids": {
                "type": "byte",
                "value": 1
            },
            "respawn_anchor_works": {
                "type": "byte",
                "value": 0
            }
        }
    },
    "worldName": "minecraft:overworld",
    "hashedSeed": [
        264575484,
        1586805883
    ],
    "maxPlayers": 5,
    "viewDistance": 11,
    "simulationDistance": 10,
    "reducedDebugInfo": false,
    "enableRespawnScreen": true,
    "isDebug": false,
    "isFlat": true
};
// Export Default Packet Data as Default
export default PacketData;