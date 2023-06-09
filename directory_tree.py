import os


def print_directory_tree(root_path, indent=''):
    items = os.listdir(root_path)
    for index, item in enumerate(sorted(items)):
        item_path = os.path.join(root_path, item)
        is_last = index == len(items) - 1

        if os.path.isdir(item_path):
            print(indent + '├─ ' + item)
            branch = indent + ('│  ' if not is_last else '   ')
            print_directory_tree(item_path, indent=branch)
        else:
            prefix = '└─ ' if is_last else '├─ '
            print(indent + prefix + item)


root_directory = '.'  # Change this to the root directory you want to print the tree for
print_directory_tree(root_directory)
