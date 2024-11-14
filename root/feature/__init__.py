from vx_root import root_feature, root_content
from basics_feature import System

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


@content.dispatch("data")
def feature_title():
    return feature.params.get_value("title")


@content.dispatch("task")
def firefox(url: str):
    System.run("firefox", ["--new-window", url])
