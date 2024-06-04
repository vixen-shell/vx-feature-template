from vx_feature_utils import Utils

utils = Utils.define_feature_utils()
content = Utils.define_feature_content(
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


@content.add_handler("data")
def date():
    from datetime import datetime

    date = datetime.now()

    return {
        "day": date.strftime("%d"),
        "mounth": date.strftime("%m"),
        "year": date.strftime("%Y"),
    }
