import sys
import os

# python create_directory.py 1 introduction

licence = """
MIT License

Copyright (c) 2022 Animesh Bhadra

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
"""

readme_file_name = "ReadMe.md"
chapter_no = "Section-"


if __name__ == "__main__":
    print("Hello World")
    program_name = sys.argv[0]
    arguments = sys.argv[1:]

    print(arguments)
    if len(sys.argv[1:]) > 2:
        print("Please pass only two  argument to the program. ", len(sys.argv[1:]))
        sys.exit(1)

    number = int(arguments[0])
    if number < 10:
        number = "0" + str(number)
    number = str(number)

    chapter_no += number

    chapter_name = arguments[1]
    chapter_name = chapter_name.title().replace(" ", "-")

    dir_to_create = chapter_no + "-" + chapter_name
    print("progam name: ", program_name, " arguments: ", arguments)
    print("dir_to_create: ", dir_to_create)
    try:
        os.makedirs("DOCS/" + dir_to_create)
        os.makedirs("SRC/" + dir_to_create)
        cwd = os.getcwd()
        os.chdir("DOCS/" + dir_to_create)
        os.system("touch ReadMe.md")
        if not os.path.exists(".gitignore"):
            os.chdir(cwd)
            os.system("touch .gitignore")
            os.system("touch LICENSE")
            with open("LICENSE", "w") as f:
                f.write(licence)
            os.system("touch ReadMe.md")
    except FileExistsError:
        print("The directory already exist")
