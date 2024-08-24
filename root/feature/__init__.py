from vx_root import root_feature

feature = root_feature()

feature.init(
    {
        "frames": {
            "main": {
                "name": "Main Window",
                "route": "main",
                "layer_frame": "disable",
            }
        },
        "state": "disable",
    }
)
