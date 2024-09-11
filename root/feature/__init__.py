from vx_root import root_feature, root_content
from vx_system import SysTasks

feature = root_feature()
content = root_content()

feature.init(
    {
        "frames": {
            "main": {
                "name": "Main Window",
                "route": "main",
                "layer_frame": "disable",
            },
            "docs": {
                "name": "Vixen Shell Documentation",
                "route": "docs",
                "layer_frame": "disable",
            },
        },
        "state": "disable",
    }
)


@content.dispatch("task")
def firefox(url: str):
    SysTasks.run("firefox", ["--new-tab", url])
