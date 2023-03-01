from os import environ
from bs4 import BeautifulSoup
import requests

from google.cloud import translate

# Authenticate user
project_id = environ.get("PROJECT_ID", "")
assert project_id
parent = f"projects/{project_id}"

# Instantiate the Translation API client
translate_client = translate.TranslationServiceClient()


def translate_url(url: str, target_language_code: str) -> str:
    """
    Translates the text in an HTML document to the specified language.

    Args:
        url (str): The HTML content to be translated.
        target_language_code (str): The code for the target language.

    Returns:
        str: The translated HTML content.
    """
    get_html = requests.get(url)
    soup = BeautifulSoup(get_html.content, 'lxml')

    # Find all tags containing text
    stripped_strings = [text for text in soup.stripped_strings]

    for text in stripped_strings:
        tag = soup.find(string=text)
        if tag is not None:
            # Loop through the tags containing text and translate each one
            response = translate_client.translate_text(
                contents=[text],
                target_language_code=target_language_code,
                parent=parent)
            for translation in response.translations:
                tag.replace_with(translation.translated_text)

    # Find pending tags
    header_tags = soup.find_all(name=[
                    'button',
                    'a',
                    'h2',
                    'h3',
                    'h4',
                    'h5',
                    'span',
                    'p'])

    # Loop through each pending tag and change the text
    for tag in header_tags:
        if tag.string is not None:
            response = translate_client.translate_text(
                contents=[tag.string],
                target_language_code=target_language_code,
                parent=parent)
            for translation in response.translations:
                tag.string.replace_with(translation.translated_text)

    res_html = str(soup)
    return res_html


def process_url(index_url: str, target_language_code: str) -> str:
    # Retrieve the HTML content from the website
    get_html = requests.get(index_url)
    soup = BeautifulSoup(get_html.content, 'lxml')

    # Find all links ending with .html
    all_links = soup.find_all(
        'a', href=lambda href: href and href.endswith('.html'))

    try:
        for link in all_links:
            url = link.get('href')
            appended_url = "https://andylopezr.github.io/classcentral/" + url
            translated_url = translate_url(appended_url, target_language_code)

            # Write the modified HTML content to a new file
            try:
                with open(url, 'w') as f:
                    f.write(translated_url)
            except:
                pass

    except:
        pass


# Call the process_page function to start the process
index_url = "https://andylopezr.github.io/classcentral/"
target_language_code = "hi"
process_url(index_url, target_language_code)
