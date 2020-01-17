filename="sprocs.txt"
all_lines = `cat $filename`
for line in $all_lines;
do
    echo $line
done