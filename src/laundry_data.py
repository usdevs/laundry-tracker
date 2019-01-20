data = {
  17: {
    'washers': {
      1: "Available",
      2: "In Use",
      3: "In Use",
      4: "Available",
      5: "Available"
    },
    'dryers': {
      1: "Available",
      2: "In Use",
      3: "In Use",
      4: "Available"
    }
  },
  9: {
    'washers': {
      1: "Available",
      2: "In Use",
      3: "Available",
      4: "Available",
      5: "In Use"
    },
    'dryers': {
      1: "Available",
      2: "Available",
      3: "In Use",
      4: "Available"
    }
  }
}

def to_list(data):
    data = data.items()
    lst = []
    for datum in data:
        if type(datum[1]) == dict:
            lst.append([datum[0], to_list(datum[1])])
        else:
            lst.append([datum[0], datum[1]])
    return lst
