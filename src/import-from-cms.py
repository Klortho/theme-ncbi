import os
import re
from lxml import etree

subsite=sys.argv[1]

url='https://svn.ncbi.nlm.nih.gov/repos/staticdata/trunk/cms-content/{}/'.format(subsite)

r = requests.get(url)
t = etree.fromstring(r.text)

if not os.path.exists(subsite):
    try:
        os.mkdir(subsite)
    except Exception as e:
        print("ERROR: %s".format(e))
        sys.exit(1)

for filename in t.xpath('//li/a/text()'):
    if not filename in ('.','..'):
        outfile = "{}/{}".format(subsite, re.sub(r'\.xml$', ".md", str(filename)))
        pypandoc.convert_text(requests.get(url + filename).text, format="html", to="md", outputfile=outfile)
        print("{} => {}".format(filename, outfile))

sys.exit(0)