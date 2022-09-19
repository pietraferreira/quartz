---
title: "DejaGNU Notes"
tags:
  - work
  - engineer-training
---
# DejaGNU Notes
---

General notes on DejaGNU.

* It is implemented as the **runtest** command: `runtest [options] [test]`
 
* Comprises of a command to run tests, language in which to write the tests
(expect), a standard directory structure for the tests and a set of
configuration files.

### Most important options

**--tool [toolname]**: name of the group of tests being carried out, might be
the name of a tool or an indicator of a type of test.

**--srcdir [dir]** : path where directories of tests may be found, there is also
tool specific configuration files like **lib**. The name of the directories
containing tests must end with the suffix **.tests**.

**--outdir [dir]**: output logs.

**--target_board [board]**: specifies board(s) on which the tests should be
run, also controls which **board configuration file(s)** will be used.

* If nothing is specified, **runtest** will run all tests it can find.

* Don't forget to look at all the options by running `runtest -help`

### What language?

It makes use of **expect**, which is a tool not a language. However, it is
easiest to regard it as a language which extends TCL.

### Directory Structure

By default the test framework lives which a **testsuite** directory with the
following subdirectories:

**config**: optional, contains **expect** configuration files for each of the
different types of target board that might be tested. It has names like
**board.exp** or **unix.exp**.

**lib**: directory containing expect configuration files for each of the tools
being tested, so something like **toolname.exp**.

test directories: directories named **toolname[type].tests** contain expect
tests for the tool **toolname**. The optional **type** field allows the test to be
split into several directories.

### Configuration Files

They set global variables and define helper functions.

The commands that correspond to **runtest** can be set in the configuration
files, so for example you could set:

| runtest | expect   | description                                                |
| ------- | -------- | ---------------------------------------------------------  |
| --all   | all_flag | display all test results if set (default is only failures) |

#### Configurations Files Sequence

- Personal Configuration File

  This goes in the user's home directory **~/.dejagnurc**, it is only used to set
variables that control personal taste in output.

- Local Configuration File

It is always named **site.exp** and should be in the directory where the tests
are being run, it is generally used to set variables specific to the tool(s)
being tested.

  The file is created in two halves, separated by a comment line. Only the first
part is regenerated every time **make** is run, so changes can be made in the
second half.

This is a convenient place for quickly testing changes, it would not be recommend to make more permanent changes here.

- Global Configuration File

  Allows a group testing the same product to share common settings.

- Board Configuration File

  Used for settings specific to a particular target board, as specified by the
**--target_board** option to **runtest**. If nothing is specified it defaults
to **unix.exp**.

  The search path for board configuration files is in the global variable
**boards_dir**, which by defaults includes **usr/share/dejagnu/baseboards** and
**usr/share/dejagnu/config**.
