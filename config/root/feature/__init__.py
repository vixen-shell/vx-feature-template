from vx_feature_utils import Utils

utils = Utils()

content = utils.define_feature_content(
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
