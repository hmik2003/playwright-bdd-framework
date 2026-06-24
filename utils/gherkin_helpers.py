def parse_gherkin_table(rows: list[dict[str, str]]) -> dict[str, str]:
    return rows[0]


def tag_scenario(tags: list[str]) -> bool:
    import os

    filter_tags = os.environ.get("TAGS")
    if filter_tags:
        allowed = [tag.strip() for tag in filter_tags.split(",")]
        return any(tag.replace("@", "") in allowed for tag in tags)
    return True
