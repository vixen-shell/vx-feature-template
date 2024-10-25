from vx_root import root_feature, root_content
from vx_system import System

feature = root_feature()
content = root_content()

feature.init(
    {
        "title": "Creating a new feature for Vixen Shell",
        "frames": {
            "main": {
                "name": "Main Window",
                "route": "main",
                "layer_frame": "disable",
            },
        },
    }
)

feature.set_required_features(["vx_system"])


@content.dispatch("data")
def feature_title():
    return feature.params.get_value("title")


@content.dispatch("task")
def firefox(url: str):
    System.run("firefox", ["--new-window", url])
